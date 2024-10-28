export function cookieParser(req, _res, next) {
    const cookieHeader = req.headers.cookie || "";
    const cookiesStrings = cookieHeader
        .split(';')
        .map(s => s.trim().split('=').map(d => d.trim()));

    req.cookie = Object.fromEntries(cookiesStrings);
    next();
}
