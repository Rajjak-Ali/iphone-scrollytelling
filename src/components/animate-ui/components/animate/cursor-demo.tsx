import {
    Cursor,
    CursorFollow,
    CursorProvider,
    type CursorFollowProps,
} from '@/components/animate-ui/components/animate/cursor';

interface CursorDemoProps {
    global?: boolean;
    enableCursor?: boolean;
    enableCursorFollow?: boolean;
    side?: CursorFollowProps['side'];
    sideOffset?: number;
    align?: CursorFollowProps['align'];
    alignOffset?: number;
}

export const CursorDemo = ({
    global = false,
    enableCursor = true,
    enableCursorFollow = true,
    side = 'bottom',
    sideOffset = 15,
    align = 'end',
    alignOffset = 5,
}: CursorDemoProps) => {
    return (
        <div
            key={String(global)}
            className="max-w-[400px] h-[400px] w-full bg-accent rounded-lg flex items-center justify-center p-6 border"
        >
            <div className="text-center space-y-4">
                <p className="font-medium italic text-muted-foreground">
                    Move your mouse over the text below
                </p>

                {/* Note: In the global app, CursorProvider is already at root. 
              Nesting providers is okay but might double cursor if global=true here too? 
              If global=false here, it just provides context for this localized demo area. 
          */}
                <CursorProvider global={global}>
                    {enableCursor && <Cursor />}
                    {enableCursorFollow && (
                        <CursorFollow
                            side={side}
                            sideOffset={sideOffset}
                            align={align}
                            alignOffset={alignOffset}
                        >
                            <div className="p-4 bg-muted rounded cursor-default border border-dashed">
                                Hover Me (Designer)
                            </div>
                        </CursorFollow>
                    )}
                </CursorProvider>
            </div>
        </div>
    );
};
