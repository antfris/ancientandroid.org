git add -A
git commit -m "adding articles update"
git push
ssh -t antfris@antfris.org << EOF 
	ls -l
	cd /home/antfris/repos/antfris-web.frontend
	ls -l
	npm run build
	ls -l
	exit
EOF
