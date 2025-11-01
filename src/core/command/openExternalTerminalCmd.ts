import * as vscode from "vscode";
import { verifyDirExistence } from '@/core/util/file';
import { revealTreeItem } from '@/core/util/tree';
import { openExternalTerminal } from '@/core/util/external';
import { AllViewItem } from '@/core/treeView/items';
import { Alert } from '@/core/ui/message';
import * as path from "path";

export const openExternalTerminalCmd = async (item?: AllViewItem, needRevealTreeItem = true) => {
    if (!item) return;
    const fsPath = item.fsPath;
    if (!(await verifyDirExistence(fsPath))) return;
    try {
        if (needRevealTreeItem) await revealTreeItem(item);

        const cfg = vscode.workspace.getConfiguration("verition-worktree-manager", vscode.Uri.file(fsPath));
        const subpath = (cfg.get<string>("openSubpath", "") ?? "").trim();

        let targetPath = fsPath;
        if (subpath) {
            const candidate = path.join(fsPath, subpath);
            if (await verifyDirExistence(candidate)) {
                targetPath = candidate;
            }
        }

        await openExternalTerminal(`${targetPath}`);
    } catch (error) {
        Alert.showErrorMessage(vscode.l10n.t('Failed to open external terminal\n\n{0}', String(error)));
    }
};
