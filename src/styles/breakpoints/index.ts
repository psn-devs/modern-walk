const screenWidths = {
    small: 576,
    medium: 768,
    large: 992
}

export const breakpoints = {
    viewport_s: `(max-width: ${screenWidths.small}px)`,
    viewport_m: `(max-width: ${screenWidths.medium}px)`,
    viewport_l: `(min-width: ${screenWidths.large}px)`
}