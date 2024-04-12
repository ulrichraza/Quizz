'use client';
import { NextUIProvider } from '@nextui-org/react';
import QuizzProvider from '@/contexts/quizz';
import { QueryClient, QueryClientProvider } from 'react-query';
import NextDynamic from 'next/dynamic';

const Quizz = NextDynamic(() => import('@/components/quizz/Quizz'));
export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider className="h-full w-full">
        <QuizzProvider>
          <Quizz />
        </QuizzProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export const dynamic = 'force-dynamic';
