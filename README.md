Js and git studying test  
  
git init  
git add .  
git remote add origin  
git commit -m  
git commit  --ammend  
git log  
git status  
git diff  - file diff  
git restore --staged - remove modified file from indexation (keep the file modified)  
git restore - remove unstaged file's changes  
git rm - delete file  
git rm --cached  - delete file from indexation   
git mv - rename the file (when its in the staging area)  
git remote  
git remote -v  - адрес   
git remote add "shortname" "url"  
git fetch - git pull, но не сливает данные  
git push origin main
git push -u origin main - upstream (ветка по умолч для последующих push и pull)   
git remote show origin  
git remote rename   
git remote rm  

git tag  
git tag -a  
git tag  -m  
Теги могут быть легковесными и аннотированными
git show  
git tag -a v1.2 (контрольная сумма коммита)  
git push origin tagname  
git push origin --tags  
git tag -d tagname   
git checkout tagname  
git config --global alias.ci commit  