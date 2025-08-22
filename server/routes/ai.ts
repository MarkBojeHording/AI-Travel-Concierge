import { Router } from 'express';
import { openai } from '../config/openai';

const router = Router();

// POST /api/generateResponse
router.post('/generateResponse', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: 'Prompt is required'
      });
    }

    console.log('🤖 Generating AI response for:', prompt);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an expert travel concierge assistant. You help travelers plan amazing trips by providing personalized recommendations, travel tips, and destination insights. Always be helpful, enthusiastic, and provide specific, actionable advice. Keep responses concise but informative (2-3 sentences).`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response at the moment. Please try again.';

    console.log('✅ AI response generated successfully');

    res.json({
      success: true,
      data: {
        response,
        usage: completion.usage
      }
    });

  } catch (error) {
    console.error('❌ Error generating AI response:', error);

    // Fallback responses for common travel queries
    const fallbackResponses = [
      "I'd love to help you plan your trip! Could you tell me more about your travel preferences and destination interests?",
      "That sounds like an exciting adventure! Let me suggest some amazing destinations that might be perfect for you.",
      "Great question! I can recommend some fantastic travel options based on your interests and budget.",
      "I'm here to help you discover amazing destinations! What type of experience are you looking for?"
    ];

    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

    res.status(500).json({
      success: false,
      error: 'Failed to generate AI response, using fallback',
      data: {
        response: randomResponse,
        usage: null
      }
    });
  }
});

export { router as generateResponse };
