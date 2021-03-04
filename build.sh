###############################################################################
# Copyright (c) 2015 Yorkshire Interactive (yorkshireinteractive.com)
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
###############################################################################

function pause() {
  echo ''
  echo 'Package ready!'
  echo ''
  read -s -n 1 -p 'Press any key to continue...'
  echo ''
}

echo '---------------------'
echo '| Yoonit Components |'
echo '---------------------'
echo 'Updating repository...'
git checkout development
git pull
wait
echo 'Cleaning files...'
rm -rf node_modules
rm -rf npm
rm -rf dist
wait
echo 'Installing dependencies...'
npm i
wait
echo 'Running linter...'
npm run lint
wait
echo 'Running Unit Tests...'
npm run test:unit
wait
echo 'Tests Coverage...'
npm run test:unit:coverage
wait
echo 'Building...'
npm run build:vue
wait
echo 'Preparing "npm" folder to deploy...'
mkdir npm
mkdir npm/vue
# mkdir npm/wc
cp -fR dist/vue/* npm/vue
# cp -fR dist/wc/* npm/wc
cp README.md npm/vue/README.md
# cp README.md npm/wc/README.md
cp package.json npm/vue/package.json
# cp package.json npm/wc/package.json
cp .npmignore npm/vue/.npmignore
# cp .npmignore npm/wc/.npmignore
echo '*.html' > npm/vue/.gitignore
# echo '*.html' > npm/wc/.gitignore
# node -e "let pkg=require('./npm/wc/package.json'); pkg.name='@yoonit/web-components'; require('fs').writeFileSync('./npm/wc/package.json', JSON.stringify(pkg, null, 2));"
rm -rf dist
pause
