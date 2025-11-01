import * as vscode from 'vscode';

export function openSettingCmd() {
    void vscode.commands.executeCommand('workbench.action.openSettings', `@ext:vnehruji.verition-worktree-manager`);
}