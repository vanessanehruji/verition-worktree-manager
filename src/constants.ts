export const APP_NAME = 'verition-worktree-manager';

export enum Commands {
    refreshWorktree = 'verition-worktree-manager.refreshWorktree',
    switchWorktree = 'verition-worktree-manager.switchWorktree',
    addWorktree = 'verition-worktree-manager.addWorktree',
    addGitFolder = 'verition-worktree-manager.addGitFolder',
    addToFavorite = 'verition-worktree-manager.addToFavorite',
    addRootsToRepo = 'verition-worktree-manager.addRootsToRepo',
    removeFavorite = 'verition-worktree-manager.removeFavorite',
    removeMultiFavorite = 'verition-worktree-manager.removeMultiFavorite',
    removeGitFolder = 'verition-worktree-manager.removeGitFolder',
    removeMultiGitFolder = 'verition-worktree-manager.removeMultiGitFolder',
    renameGitFolder = 'verition-worktree-manager.renameGitFolder',
    repairWorktree = 'verition-worktree-manager.repairWorktree',
    removeWorktree = 'verition-worktree-manager.removeWorktree',
    moveWorktree = 'verition-worktree-manager.moveWorktree',
    lockWorktree = 'verition-worktree-manager.lockWorktree',
    unlockWorktree = 'verition-worktree-manager.unlockWorktree',
    pullWorktree = 'verition-worktree-manager.pullWorktree',
    pushWorktree = 'verition-worktree-manager.pushWorktree',
    pruneWorktree = 'verition-worktree-manager.pruneWorktree',
    switchToSelectWorkspace = 'verition-worktree-manager.switchToSelectWorkspace',
    addWorktreeFromBranch = 'verition-worktree-manager.addWorktreeFromBranch',
    revealInSystemExplorer = 'verition-worktree-manager.revealInSystemExplorer',
    revealInSystemExplorerContext = 'verition-worktree-manager.revealInSystemExplorer.context',
    openSetting = 'verition-worktree-manager.openSetting',
    refreshGitFolder = 'verition-worktree-manager.refreshGitFolder',
    openWalkthroughs = 'verition-worktree-manager.openWalkthroughs',
    openTerminal = 'verition-worktree-manager.openTerminal',
    openExternalTerminal = 'verition-worktree-manager.openExternalTerminal',
    openExternalTerminalContext = 'verition-worktree-manager.openExternalTerminal.context',
    addToWorkspace = 'verition-worktree-manager.addToWorkspace',
    removeFromWorkspace = 'verition-worktree-manager.removeFromWorkspace',
    copyFilePath = 'verition-worktree-manager.copyFilePath',
    refreshRecentFolder = 'verition-worktree-manager.refreshRecentFolder',
    refreshFavorite = 'verition-worktree-manager.refreshFavorite',
    addToGitFolder = 'verition-worktree-manager.addToGitFolder',
    checkoutBranch = 'verition-worktree-manager.checkoutBranch',
    deleteBranch = 'verition-worktree-manager.deleteBranch',
    gitFolderViewAsTree = 'verition-worktree-manager.gitFolderViewAsTree',
    gitFolderViewAsList = 'verition-worktree-manager.gitFolderViewAsList',
    gitFolderSetOpen = 'verition-worktree-manager.gitFolderSetOpen',
    gitFolderSetClose = 'verition-worktree-manager.gitFolderSetClose',
    searchAllWorktree = 'verition-worktree-manager.searchAllWorktree',
    loadMoreRecentFolder = 'verition-worktree-manager.loadMoreRecentFolder',
    loadAllTreeData = 'verition-worktree-manager.loadAllTreeData',
    viewHistory = 'verition-worktree-manager.viewHistory',
    openRecent = 'verition-worktree-manager.openRecent',
    openFavorite = 'verition-worktree-manager.openFavorite',
    openWorkspaceWorktree = 'verition-worktree-manager.openWorkspaceWorktree',
    fetchWorktree = 'verition-worktree-manager.fetchWorktree',
    fetchRepo = 'verition-worktree-manager.fetchRepo',
    toggleLog = 'verition-worktree-manager.toggleLog',
    openRepository = 'verition-worktree-manager.openRepository',
    openChanges = 'verition-worktree-manager.openChanges',
    bundleRepo = 'verition-worktree-manager.bundleRepo',

    renameBranch = 'verition-worktree-manager.internal.renameBranch',
    refreshWorktreeCache = 'verition-worktree-manager.internal.refreshWorktreeCache',
    watchWorktreeEvent = 'verition-worktree-manager.internal.watchWorktreeEvent',
    unwatchWorktreeEvent = 'verition-worktree-manager.internal.unwatchWorktreeEvent',
}

export enum ContextKey {
    gitFolderViewAsTree = 'gwm.context.gitFolderViewAsTree',
    addRootsToRepo = 'gwm.context.addRootsToRepo',
}

export const WORK_TREE_SCHEME = 'verition-worktree-manager-scheme';

export const WORK_TREE = 'worktree';

export enum TreeItemKind {
    worktree = 'worktree',
    workspaceGitMainFolder = 'workspaceGitMainFolder',
    gitFolder = 'gitFolder',
    folder = 'folder',
    setting = 'setting',
    file = 'file',
}

export enum QuickPickKind {
    pickWorktree = 'pickWorktree',
}

export type AlertLevel = 'warn' | 'info' | 'error';

export enum ViewId {
    folderList = 'verition-worktree-manager-recent',
    worktreeList = 'verition-worktree-manager-list',
    gitFolderList = 'verition-worktree-manager-folders',
    settingList = 'verition-worktree-manager-setting',
    worktreeListSCM = 'verition-worktree-manager-list.scm',
    gitFolderListSCM = 'verition-worktree-manager-folders.scm',
    favorite = 'verition-worktree-manager-favorite',
}

export const refArgList = [
    'refname',
    'objectname:short',
    '*objectname',
    'worktreepath',
    'authordate',
    '*authordate',
    'HEAD',
    'refname:short',
    'taggername',
    'authorname',
    '*authorname',
    'subject',
    '*subject',
] as const;

export enum HEAD {
    current = '*',
}

export enum StateKey {
    gitFolderViewAsTree = 'gitFolderViewAsTree',
    gitFolders = 'gitFolders',
    workTreeCache = 'workTreeCache',
    mainFolders = 'mainFolders',
}

export enum RefreshCacheType {
    all = 'all',
    workspace = 'workspace',
}

export enum RecentItemType {
    workspace = 0,
    folder = 1,
    file = 2,
}