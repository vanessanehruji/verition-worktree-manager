import * as vscode from 'vscode';
import { AllViewItem } from '@/core/treeView/items';
import { verifyFileExistence, verifyDirExistence, checkIsFolder } from '@/core/util/file';
import { revealTreeItem } from '@/core/util/tree';
import { revealFolderInOS } from '@/core/util/external';
import { Config } from '@/core/config/setting';
import path from 'path';

export const revealInSystemExplorerCmd = async (item?: AllViewItem, needRevealTreeItem = true) => {
    if (!item) return;
    const fsPath = item.fsPath;
    const exist = await verifyFileExistence(fsPath);
    if (!exist) return;
    if (needRevealTreeItem) await revealTreeItem(item);

    const cfg = vscode.workspace.getConfiguration('verition-worktree-manager', vscode.Uri.file(fsPath));
    const subpath = (cfg.get<string>('openSubpath', '') ?? '').trim();

    let targetPath = fsPath;
    if (subpath) {
        const candidate = path.join(fsPath, subpath);
        if (await verifyDirExistence(candidate)) {
            targetPath = candidate;
        }
    }

    const openInsideFolder = Config.get('openInsideFolder', false);
    const isFolder = await checkIsFolder(targetPath);
    if (openInsideFolder && isFolder) revealFolderInOS(path.resolve(targetPath));
    else vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(targetPath));
};
