---
title: 'Understanding Git - Merge, Rebase & Bisect'
description: blog description
published: true
date: 2020-05-08
category: tech
keywords: git, tutorial
---

In any git workflow, branching and merging code is unavoidable. In this post we are having a not-so deeper look at the three important git commands viz. git-merge, git-rebase and git-bisect. 

## Git Merge
As the name suggests this command will incorporate changes from named commits/branches to the current branch. If the branch names are mentioned then its `HEAD` is considered for merge. One thing to note is that before merge you should commit or stash your uncommitted local changes to avoid confusions during conflict resolution. Also if there are uncomitted changes, `git merge --abort` in some cases find it difficult to constrcut the pre-merge state. Git merges can be broadly classified into two: 
1. Fast Forward Merge: 
If there are no changes in the target branch, then source branch is merged without an extra commit.

[image](assets/images/04_01.jpeg)

2. True Merge: 
If there are changes in source and target branch, then an extra commit is required with both of them as parents.

[image](assets/images/04_02.jpeg)

If there are conflicts in files during merge, we need to manually resolve it. Git will mark conflicts in the working tree. We should edit the files and stage them. Run `git commit` or `git merge --continue` to complete the merge.
If you want to drop the merge, then run `git merge --abort` or `git merge --quit`. The difference between abort and quit is that, abort stops the current merge process and try to reconstruct the pre-merge state while quit leave the index and working-tree as is. 

You can also merge multiple branches as follows:
`git merge branch1 branch2 ...`. The strategy used for this type of merging is 'Octopus' strategy and it refuses to do a complex merge that needs manual resolution. So you should make sure that branches in octopus merget touch different files. You can find the different merging strategies [here](https://git-scm.com/docs/merge-strategies).

Want merge changes without a commit? Then use `git merge branch1 --squash`. This will merge the changes in 'branch1' to current branch without any merge information or commit. 'git log' output will look like as if nothing happened. '--commit' flag is not allowed with this command and will fail.

## Git Rebase
Rebase too helps in merging branches, but in a different way. Here first all changes in the target branch will be saved to a temporary area, then target branch is reset to source branch and saved commits are replayed one by one on top of it.

[image](assets/images/04_03.jpeg)

In case of conflict rebasing process will be paused and we need to manually fix the conflicts. Once done you can run `git rebase --continue` to continue the process. Else you can skip the commit using `git rebase --skip`. In normal rebasing if the target branch contains merged commits, it will be dropped. We need to pass the option `--rebase-merges` to avoid this.

[image](assets/images/04_04.jpeg)

One of the powerful option in `git rebase` is interactive rebasing. It helps user to edit the commits, reorder or even remove them. There are 11 subcommands that can be used with interacitve rebasing, let's see them one by one. For the purpose of explaining this consider the following branch with linear history.

[image](assets/images/04_05.jpeg)

When i run `git rebase -i --root`, git will open text editor with commits and hints for using sub-commands. Each line will be in the following format: 

`sub-command commit-hash commint-message` 
1. **pick** - this command tells git to use this commit without any modifiction. eg: `pick 9fadd5a add C`
2. **drop** - to drop the commit. All the changes associated with this commit will be dropped. eg: `drop 9fadd5a add C`
3. **reword** - this command helps us to change the commit message. During rebasing when this command comes git will open the text editor to enter the new message. Once we enter the new message and saves it rebasing resumes automatically. eg: `reword 9fadd5a add C`
4. **squash** - this command helps us to merge the current commit with the previous commit by preserving the commit message.
eg: 
```
pick 9fadd5a add C
squash b390979 add D
```
the above command wil result in a new commit with message
```
add C

add D
```
5. **fixup** - this is similar to 'squash', but discard the commit message.
eg: 
```
pick 9fadd5a add C
fixup b390979 add D
```
the above command wil result in a new commit with message
```
add C
```
6. **edit** - Consider the scenario, you've missed a file during the commit. If it was the last commit we can use `git commit --amend`, otherwise we'll use interactive rebase with `edit`. First we'll stash the files to be committed, then do a rebase and mark the commit to be edited using edit.
eg: `edit 9fadd5a add C`
Rebasing halts when it reaches edit command. Here we can pop the stashed changes and run `git commit --amend` to add the missed files. Once done you can run `git rebase --continue` to continue rebasing.
7. **exec** - this command helps us to run a command or script.
eg: `exec 'pwd'` will print current working directory during rebasing. This is just dumb example, but really helpful in complex use cases.
8. **break** - this command helps us to halt rebasing. To continue from here use `git rebase --continue`
eg: `break` (in a single line)

The remaining three commands are usually used together to replay merge commits. The commads are: 

9. **label** - this command helps us to provide an alternate name to the current HEAD.
10. **reset** - this command helps us to reset current HEAD to the given label.
11. **merge** - this command helps us to create a merge commit, if an original merge commit is provided, its message will be used otherwise we can provide a new one after '#'

Here in this example, I'll be using these commands to create a pseudo-merge commit from the linear git history (shown in the above figure) 

```bash
pick 9fadd5a add A
label onto

pick b390979 add B
pick 97fabfa add C
label main

reset onto
pick 4ecb083 add D
pick a9f32a0 add E
label sub

reset main
merge sub # This is new merge commit
```
Here we are labeling commits A, C & E as onto, main and sub respectively. Final result will be as below. You can find another great read [here](https://stackoverflow.com/a/61103385/1520750)

[image](assets/images/04_06.jpeg)

## Git Bisect
This is another git command with a bunch of sub commands. It helps to find the commit that introduced a bug/change by binary search. First need to mark atleast two commits as good and bad respectively, so that git can do the binary search. 
eg: 
```bash
git bisect start
git bisect bad 4ecb083
git bisect good 97fabfa
```
Short hand for the above is `git bisect start [bad commit] [good commit]`
```
git bisect start 4ecb083 97fabfa
```
Once done git will pick a commit in between good and bad and ask us whether it is either good or bad. We need to check and mark appropriately. To mark good run the command `git bisect good` otherwise `git bisect bad`. This proces continues until git finds the first bad commmit. To reset back to previous state run `git bisect reset`, if you want to switch to a specific commit run `git biect reset commithash`. To go back to bad commit use the command `git bisect reset bisect/bad`. 'bisect/bad' is a single option and should be used together. I used it as `git bisect reset bad` the first time and got error. :)

But don't you find this bit boring? Can we automate this? Ofcourse yes. If you have an external test script you can run it as below. One catch is that your tests and test script should be in an external path or untracked in the current repo.
```bash
git bisect start $badCommit $goodCommit
git bisect run $testScript
git bisect reset # go back to previous state after bisect
```

An example power-shell script to run dotnet tests is given below.

```ps
 param (
    [Parameter(Mandatory=$true)]
    [string]$goodCommit = $( Read-Host "Good commit hash, please" ),
    [Parameter(Mandatory=$true)]
    [string]$badCommit = $( Read-Host "Bad commit hash, please" ),
    [Parameter(Mandatory=$true)]
    [string]$testProjectPath = $( Read-Host "Test project path, please" )
 )
 Write-Host $goodCommit $badCommit $testProjectPath 
 try 
 {
   git bisect start $badCommit $goodCommit
   git bisect run dotnet test $testProjectPath -v q
   git bisect reset
 }
 catch {
    write-host "Caught an exception:" -ForegroundColor Red
    write-host "Exception Type: $($_.Exception.GetType().FullName)" -ForegroundColor Red
    write-host "Exception Message: $($_.Exception.Message)" -ForegroundColor Red
}
```

If you discover that you made a mistake in specifying the status of a revision, you can save the output of this command to a file.
```bash
git bisect log > log-file
```
Edit it to remove the incorrect entries, and then issue the following commands to return to a corrected state:
```bash
git bisect reset
git bisect replay log-file
```

Woof, That some long read. 