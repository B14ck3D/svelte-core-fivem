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
//# sourceMappingURL=theme.d.ts.map