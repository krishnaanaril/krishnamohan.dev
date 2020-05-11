---
title: 'Understanding Git - Merge, Rebase & Bisect'
description: blog description
publish: false
date: 2020-05-08
category: tech
keywords: git, tutorial
---

In any git workflow, branching and merging code is unavoidable. In this post we are having a not-so deeper look at the three important git commands viz. git-merge, git-rebase and git-bisect. 

## Git Merge
As the name suggests this command will incorporate changes from named commits/branches to the current branch. If the branch names are mentioned then its `HEAD` is considered for merge. One thing to note is that before merge you should commit or stash your uncommitted local changes to avoid confusions during conflict resolution. Also if there are uncomitted changes, `git merge --abort` in some cases find it difficult to constrcut the pre-merge state. Git merges can be broadly classified into two: 
1. Fast Forward Merge: 
If there are no changes in the target branch, then source branch is merged without an extra commit.
[image]
2. True Merge: 
If there are changes in source and target branch, then an extra commit is required with both of them as parents.
[image]

If there are conflicts in files during merge, we need to manually resolve it. Git will mark conflicts in the working tree. We should edit the files and stage them. Run `git commit` or `git merge --continue` to complete the merge.
If you want to drop the merge, then run `git merge --abort` or `git merge --quit`. The difference between abort and quit is that, abort stops the current merge process and try to reconstruct the pre-merge state while quit leave the index and working-tree as is. 

You can also merge multiple branches as follows:
`git merge branch1 branch2 ...`. The strategy used for this type of merging is 'Octopus' strategy and it refuses to do a complex merge that needs manual resolution. So you should make sure that branches in octopus merget touch different files. You can find the different merging strategies [here](https://git-scm.com/docs/merge-strategies).

Want merge changes without a commit? Then use `git merge branch1 --squash`. This will merge the changes in 'branch1' to current branch without any merge information or commit. 'git log' output will look like as if nothing happened. '--commit' flag is not allowed with this command and will fail.

## Git Rebase
Rebase too helps in merging branches, but in a different way. Here first all changes in the target branch will be saved to a temporary area, then target branch is reset to source branch and saved commits are replayed one by one on top of it.
[image]
In case of conflict rebasing process will be paused and we need to manually fix the conflicts. Once done you can run `git rebase --continue` to continue the process. Else you can skip the commit using `git rebase --skip`

###  Questions
1. What is --exec <cmd>? 
2. What is --keep-base?
3. Use of <upstream> & <branch>
4. Use of --skip, --quit, --edit-todo, --show-current-patch

## Git Bisect
* to go back to bad commit use the command git bisect reset bisect/bad. 'bisect/bad' is a single option and should be used together. I used it as git bisect reset bad the first time and got error. :)
* learned git rm --cached command
* create git bisect command using powershell