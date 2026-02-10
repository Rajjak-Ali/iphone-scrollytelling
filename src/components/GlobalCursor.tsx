'use client';

import { Cursor, CursorProvider } from '@/components/animate-ui/components/animate/cursor';

export function GlobalCursor({ children }: { children: React.ReactNode }) {
    return (
        <CursorProvider global>
            <Cursor />
            {children}
        </CursorProvider>
    );
}
