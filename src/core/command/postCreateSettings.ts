import * as vscode from 'vscode';
import * as path from 'path';

function pretty(data: unknown) {
    return Buffer.from(JSON.stringify(data, null, 2), 'utf8');
}

/**
 * Write or merge .vscode/settings.json inside <worktree>/<subpath>.
 * - Creates the .vscode folder if missing
 * - Merges if settings.json already exists
 */
export async function writeSubfolderSettings(worktreeRoot: string) {
    // Scope config to the worktree we just created
    const cfg = vscode.workspace.getConfiguration('verition-worktree-manager', vscode.Uri.file(worktreeRoot));

    const subpath = (cfg.get<string>('openSubpath', '') ?? '').trim();
    if (!subpath) return;

    const folderUri = vscode.Uri.file(path.join(worktreeRoot, subpath, '.vscode'));
    const settingsUri = vscode.Uri.file(path.join(folderUri.fsPath, 'settings.json'));

    // Ensure .vscode/ exists
    try { await vscode.workspace.fs.createDirectory(folderUri); } catch { }

    // Existing settings? Merge; else start fresh.
    let existing: Record<string, unknown> = {};
    try {
        const bytes = await vscode.workspace.fs.readFile(settingsUri);
        const text = Buffer.from(bytes).toString('utf8').trim();
        if (text) existing = JSON.parse(text);
    } catch {
        // file doesn’t exist or invalid JSON → start fresh
    }

    const merged = {
        ...existing,
        // Ensure our setting is present; do not clobber unrelated keys
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'verition-worktree-manager.openSubpath': subpath,
    };

    await vscode.workspace.fs.writeFile(settingsUri, pretty(merged));
}
