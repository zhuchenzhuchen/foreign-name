// DeepSeek API service for Chinese name generation
import { config, isApiConfigured } from '../config/env';

const API_BASE_URL = 'https://openrouter.ai/api/v1';

export interface NameGenerationRequest {
  englishName: string;
  gender: 'M' | 'F' | 'N';
  style: 'traditional' | 'modern' | 'cute' | 'heroic';
  preferences: string[];
}

export interface ChineseName {
  characters: string;
  pinyin: string;
  englishName: string;
  meaning: string;
  individualMeanings: Array<{
    character: string;
    pinyin: string;
    meaning: string;
  }>;
  culturalSignificance: string;
  bestUsedFor: string[];
  alternatives: Array<{
    characters: string;
    pinyin: string;
    meaning: string;
  }>;
}

export class DeepSeekAPI {
  private static async makeRequest(messages: any[]) {
    if (!isApiConfigured()) {
      throw new Error('API key not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.');
    }

    const response = await fetch(`${API_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.openrouterApiKey}`,
        'HTTP-Referer': config.siteUrl,
        'X-Title': config.siteName,
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3.1',
        messages,
        temperature: 0.7,
        max_tokens: 1200,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API request failed: ${response.status} ${response.statusText}. ${errorData.error?.message || ''}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  static async generateChineseName(request: NameGenerationRequest): Promise<ChineseName> {
    const { englishName, gender, style, preferences } = request;
    
    const genderText = gender === 'M' ? 'male' : gender === 'F' ? 'female' : 'gender-neutral';
    const preferencesText = preferences.length > 0 ? `, with preferences for: ${preferences.join(', ')}` : '';
    
    const prompt = `Generate a Chinese name for: ${englishName} (${genderText}, ${style}${preferencesText})

Return JSON only:
{
  "characters": "中文名字",
  "pinyin": "Pinyin",
  "englishName": "${englishName}",
  "meaning": "Brief meaning",
  "individualMeanings": [
    {"character": "中", "pinyin": "Zhōng", "meaning": "Meaning"}
  ],
  "culturalSignificance": "Cultural note",
  "bestUsedFor": ["Use1", "Use2"],
  "alternatives": [
    {"characters": "备选", "pinyin": "Bèi xuǎn", "meaning": "Meaning"}
  ]
}`;

    try {
      const response = await this.makeRequest([
        {
          role: 'user',
          content: prompt
        }
      ]);

      // Parse the JSON response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Invalid response format from API');
      }

      const parsedResponse = JSON.parse(jsonMatch[0]);
      
      // Validate the response structure
      if (!parsedResponse.characters || !parsedResponse.pinyin) {
        throw new Error('Invalid response structure from API');
      }

      // Add the original English name to the response
      parsedResponse.englishName = englishName;

      return parsedResponse as ChineseName;
    } catch (error) {
      console.error('Error generating Chinese name:', error);
      throw new Error(`Failed to generate Chinese name: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  static async getPronunciationAudio(pinyin: string): Promise<string> {
    // This would integrate with a text-to-speech service
    // For now, return a placeholder
    return `https://example.com/audio/${encodeURIComponent(pinyin)}.mp3`;
  }
}
