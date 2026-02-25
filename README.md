# Js and git practice repo (mostly git)

## Basics/Common commands  
git init - initialise git repository  
git add . - a  
git remote add origin  
git commit -m 
git commit  --ammend  
git commit -a -m 
git log - show commit history  
git status  - show status of current branch
git diff  - file diff  
git restore --staged - remove modified file from indexation (keep the file modified)  
git restore - remove unstaged file's changes  
git rm - delete file  
git rm --cached  - delete file from indexation   
git mv - rename the file (when its in the staging area)  

## Remote repository  
git remote  
git remote -v  - adress   
git remote add "shortname" "url"  
git fetch - git pull without merging
git push origin main
git push -u origin main - upstream (set default branch for future push и pull???)
git pull origin main   
git remote show origin  
git remote rename   
git remote rm  
git clone url

## Tags  
git tag  
git tag -a  
git tag  -m  
Теги могут быть легковесными и аннотированными
git show  
git tag -a v1.2 control_sum_of_a_commit  
git push origin tagname  
git push origin --tags  
git tag -d tagname   
git checkout tagname  
git config --global alias.ci commit  
  
## Branches  
git branch  
git branch name  
git checkout name  
git checkout -b name  
git merge name  
git branch -d name  
git branch -v - show last commit of each branch  
git branch --merged/--no-merged - show merged/not merged branches  
git branch --move old-name new-name  (dangerous command) after this do -> git push --set-upstream origin new-name  
after this do git push origin --delete old-name  

git checkout -b serverfix origin/serverfix - local branch made from remote one  
git branch -u origin/serverfix   - current branch tracks updates from origin/serverfix  
git branch -vv - see settings of branches  
git push origin --delete serverfix - delete remote branch  