import * as vscode from "vscode";

export const openWalkthroughsCmd = () => {
    vscode.commands.executeCommand(
        'workbench.action.openWalkthrough',
        'vnehruji.verition-worktree-manager#git-worktree-usage',
        false,
    );
};