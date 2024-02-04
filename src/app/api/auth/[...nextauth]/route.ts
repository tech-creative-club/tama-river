import NextAuth from 'next-auth';
import { options } from '@/settings/nextAuth';
export const runtime = 'edge';

const handler = NextAuth(options);
export const GET = handler.handlers.GET;
export const POST = handler.handlers.POST;
