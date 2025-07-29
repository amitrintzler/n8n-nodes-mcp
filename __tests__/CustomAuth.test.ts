
// Reuse simplified helpers from node tests
const parseHeadersCustom = (headersString: string | undefined): Record<string, string> => {
    const headers: Record<string, string> = {};
    if (headersString) {
        for (const line of headersString.split('\n')) {
            const idx = line.indexOf('=');
            if (idx > 0) {
                const name = line.substring(0, idx).trim();
                const value = line.substring(idx + 1).trim();
                if (name && value !== undefined) headers[name] = value;
            }
        }
    }
    return headers;
};

const mergeCustomAuthHeaders = (
    headers: Record<string, string>,
    authJson: string | undefined,
): Record<string, string> => {
    if (!authJson) return headers;
    return { ...headers, ...(JSON.parse(authJson)) };
};

describe('Custom Authentication JSON', () => {
    it('merges custom auth headers', () => {
        const base = parseHeadersCustom('Authorization=Bearer abc');
        const merged = mergeCustomAuthHeaders(base, '{"X-Token":"123"}');
        expect(merged).toEqual({ Authorization: 'Bearer abc', 'X-Token': '123' });
    });
});
