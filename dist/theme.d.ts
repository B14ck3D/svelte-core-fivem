export type Theme = {
    colors: {
        primary: string;
        success: string;
        warning: string;
        error: string;
        surface: string;
        onSurface: string;
        border: string;
    };
    radius: string;
    fontFamily: string;
};
export declare const defaultTheme: Theme;
export declare function themeToCssVars(theme?: Theme): Record<string, string>;
export declare const presetLight: Theme;
export declare const presetDark: Theme;
export declare const serverPalettes: {
    readonly red: {
        readonly primary: "#ef4444";
        readonly success: "#84cc16";
        readonly warning: "#f59e0b";
        readonly error: "#dc2626";
    };
    readonly blue: {
        readonly primary: "#3b82f6";
        readonly success: "#22c55e";
        readonly warning: "#f59e0b";
        readonly error: "#ef4444";
    };
    readonly purple: {
        readonly primary: "#a855f7";
        readonly success: "#10b981";
        readonly warning: "#f59e0b";
        readonly error: "#ef4444";
    };
};
//# sourceMappingURL=theme.d.ts.map