import { openai } from '@ai-sdk/openai';
import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

const provider = process.env.MODEL_PROVIDER || 'openai';
const model = process.env.MODEL_NAME || 'gpt-4o';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

function getModel(provider: string, modelName: string) {
    switch (provider) {
        case 'deepseek':
            return deepseek(modelName);
        case 'openai':
        default:
            return openai(modelName);
    }
}

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: getModel(provider, model),
        messages,
    });

    return result.toDataStreamResponse();
}