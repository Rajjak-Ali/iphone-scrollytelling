'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import {
    LiquidButton as LiquidButtonPrimitive,
    type LiquidButtonProps as LiquidButtonPrimitiveProps,
} from '@/components/animate-ui/primitives/buttons/liquid';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none",
    {
        variants: {
            variant: {
                default:
                    '[--liquid-button-background-color:#2a2a2a] [--liquid-button-color:#ffffff] text-white/90 hover:text-white shadow-xs border border-white/10',
                destructive:
                    '[--liquid-button-background-color:#3a1515] [--liquid-button-color:#ef4444] text-white shadow-xs border border-red-500/20',
                secondary:
                    '[--liquid-button-background-color:#1a1a2e] [--liquid-button-color:#6366f1] text-white/90 hover:text-white shadow-xs border border-indigo-500/20',
                ghost:
                    '[--liquid-button-background-color:transparent] [--liquid-button-color:#3b82f6] text-white/80 hover:text-white',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md gap-1.5 px-3',
                lg: 'h-10 rounded-md px-6',
                icon: 'size-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

type LiquidButtonProps = LiquidButtonPrimitiveProps &
    VariantProps<typeof buttonVariants>;

function LiquidButton({
    className,
    variant,
    size,
    ...props
}: LiquidButtonProps) {
    return (
        <LiquidButtonPrimitive
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { LiquidButton, buttonVariants, type LiquidButtonProps };
