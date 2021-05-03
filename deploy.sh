git add -A
git commit -m "adding articles update"
git push
ssh -t antfris@antfris.org 'bash -i -c "cd /home/antfris/repos/antfris-web.frontend && git pull && npm install &&  npm run build"'
