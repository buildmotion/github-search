# Nx Create Output

```ts
create-nx-workspace workspace
Creating a sandbox with the CLI and Nx Schematics...
added 368 packages from 256 contributors and audited 15266 packages in 20.559s
found 0 vulnerabilities

ng new "workspace" --collection=@nrwl/schematics
? What is the npm scope you would like to use for your Nx Workspace? angularlicious
? Which Package Manager would you like to use for your workspace? npm
CREATE workspace/.prettierrc (25 bytes)
CREATE workspace/angular.json (307 bytes)
CREATE workspace/karma.conf.js (1012 bytes)
CREATE workspace/nx.json (205 bytes)
CREATE workspace/package.json (2469 bytes)
CREATE workspace/README.md (1861 bytes)
CREATE workspace/tsconfig.json (423 bytes)
CREATE workspace/tslint.json (2307 bytes)
CREATE workspace/.editorconfig (245 bytes)
CREATE workspace/.gitignore (503 bytes)
CREATE workspace/apps/.gitkeep (1 bytes)
CREATE workspace/libs/.gitkeep (0 bytes)
CREATE workspace/tools/tsconfig.tools.json (254 bytes)
CREATE workspace/tools/schematics/.gitkeep (0 bytes)
npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.

> node-sass@4.9.3 install D:\development\buildmotion\github-search\workspace\node_modules\node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.9.3/win32-x64-67_binding.node
Cannot download "https://github.com/sass/node-sass/releases/download/v4.9.3/win32-x64-67_binding.node":

HTTP error 404 Not Found

Hint: If github.com is not accessible in your location
      try setting a proxy via HTTP_PROXY, e.g.

      export HTTP_PROXY=http://example.com:1234

or configure npm proxy via

      npm config set proxy http://example.com:8080

> node-sass@4.9.3 postinstall D:\development\buildmotion\github-search\workspace\node_modules\node-sass
> node scripts/build.js

Building: C:\Program Files\nodejs\node.exe D:\development\buildmotion\github-search\workspace\node_modules\node-gyp\bin\node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
gyp info it worked if it ends with ok
gyp verb cli [ 'C:\\Program Files\\nodejs\\node.exe',
gyp verb cli   'D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-gyp\\bin\\node-gyp.js',
gyp verb cli   'rebuild',
gyp verb cli   '--verbose',
gyp verb cli   '--libsass_ext=',
gyp verb cli   '--libsass_cflags=',
gyp verb cli   '--libsass_ldflags=',
gyp verb cli   '--libsass_library=' ]
gyp info using node-gyp@3.8.0
gyp info using node@11.10.0 | win32 | x64
gyp verb command rebuild []
gyp verb command clean []
gyp verb clean removing "build" directory
gyp verb command configure []
gyp verb check python checking for Python executable "python2" in the PATH
gyp verb `which` failed Error: not found: python2
gyp verb `which` failed     at getNotFoundError (D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:13:12)
gyp verb `which` failed     at F (D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:68:19)
gyp verb `which` failed     at E (D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:80:29)
gyp verb `which` failed     at D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:89:16
gyp verb `which` failed     at D:\development\buildmotion\github-search\workspace\node_modules\isexe\index.js:42:5
gyp verb `which` failed     at D:\development\buildmotion\github-search\workspace\node_modules\isexe\windows.js:36:5
gyp verb `which` failed     at FSReqCallback.oncomplete (fs.js:158:21)
gyp verb `which` failed  python2 { Error: not found: python2
gyp verb `which` failed     at getNotFoundError (D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:13:12)
gyp verb `which` failed     at F (D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:68:19)
gyp verb `which` failed     at E (D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:80:29)
gyp verb `which` failed     at D:\development\buildmotion\github-search\workspace\node_modules\which\which.js:89:16
gyp verb `which` failed     at D:\development\buildmotion\github-search\workspace\node_modules\isexe\index.js:42:5
gyp verb `which` failed     at D:\development\buildmotion\github-search\workspace\node_modules\isexe\windows.js:36:5
gyp verb `which` failed     at FSReqCallback.oncomplete (fs.js:158:21)
gyp verb `which` failed   stack:
gyp verb `which` failed    'Error: not found: python2\n    at getNotFoundError (D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\which\\which.js:13:12)\n    at F (D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\which\\which.js:68:19)\n    at E (D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\which\\which.js:80:29)\n    at D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\which\\which.js:89:16\n    at D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\isexe\\index.js:42:5\n    at
D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\isexe\\windows.js:36:5\n    at FSReqCallback.oncomplete (fs.js:158:21)',
gyp verb `which` failed   code: 'ENOENT' }
gyp verb check python checking for Python executable "python" in the PATH
gyp verb `which` succeeded python C:\Python27\python.EXE
gyp verb check python version `C:\Python27\python.EXE -c "import sys; print "2.7.15
gyp verb check python version .%s.%s" % sys.version_info[:3];"` returned: %j
gyp verb get node dir no --target version specified, falling back to host node version: 11.10.0
gyp verb command install [ '11.10.0' ]
gyp verb install input version string "11.10.0"
gyp verb install installing version: 11.10.0
gyp verb install --ensure was passed, so won't reinstall if already installed
gyp verb install version is already installed, need to check "installVersion"
gyp verb got "installVersion" 0
gyp verb needs "installVersion" 9
gyp verb install version is no good; reinstalling
gyp verb ensuring nodedir is created C:\Users\mattv\.node-gyp\11.10.0
gyp http GET https://nodejs.org/download/release/v11.10.0/node-v11.10.0-headers.tar.gz
gyp http 200 https://nodejs.org/download/release/v11.10.0/node-v11.10.0-headers.tar.gz
gyp verb extracted file from tarball include\node\common.gypi
gyp verb extracted file from tarball include\node\config.gypi
gyp verb extracted file from tarball include\node\js_native_api.h
gyp verb extracted file from tarball include\node\js_native_api_types.h
gyp verb extracted file from tarball include\node\node.h
gyp verb extracted file from tarball include\node\node_api.h
gyp verb extracted file from tarball include\node\node_api_types.h
gyp verb extracted file from tarball include\node\node_buffer.h
gyp verb extracted file from tarball include\node\node_object_wrap.h
gyp verb extracted file from tarball include\node\node_version.h
gyp verb extracted file from tarball include\node\uv.h
gyp verb extracted file from tarball include\node\v8-platform.h
gyp verb extracted file from tarball include\node\v8-profiler.h
gyp verb extracted file from tarball include\node\v8-testing.h
gyp verb extracted file from tarball include\node\v8-util.h
gyp verb extracted file from tarball include\node\v8-value-serializer-version.h
gyp verb extracted file from tarball include\node\v8-version-string.h
gyp verb extracted file from tarball include\node\v8-version.h
gyp verb extracted file from tarball include\node\v8.h
gyp verb extracted file from tarball include\node\v8config.h
gyp verb extracted file from tarball include\node\zconf.h
gyp verb extracted file from tarball include\node\zlib.h
gyp verb extracted file from tarball include\node\uv\aix.h
gyp verb extracted file from tarball include\node\uv\android-ifaddrs.h
gyp verb extracted file from tarball include\node\uv\bsd.h
gyp verb extracted file from tarball include\node\uv\darwin.h
gyp verb extracted file from tarball include\node\uv\errno.h
gyp verb extracted file from tarball include\node\uv\linux.h
gyp verb extracted file from tarball include\node\uv\os390.h
gyp verb extracted file from tarball include\node\uv\posix.h
gyp verb extracted file from tarball include\node\uv\stdint-msvc2008.h
gyp verb extracted file from tarball include\node\uv\sunos.h
gyp verb extracted file from tarball include\node\uv\threadpool.h
gyp verb extracted file from tarball include\node\uv\tree.h
gyp verb extracted file from tarball include\node\uv\unix.h
gyp verb extracted file from tarball include\node\uv\version.h
gyp verb extracted file from tarball include\node\uv\win.h
gyp verb extracted file from tarball include\node\openssl\aes.h
gyp verb extracted file from tarball include\node\openssl\asn1.h
gyp verb extracted file from tarball include\node\openssl\asn1_mac.h
gyp verb extracted file from tarball include\node\openssl\asn1err.h
gyp verb extracted file from tarball include\node\openssl\asn1t.h
gyp verb extracted file from tarball include\node\openssl\async.h
gyp verb extracted file from tarball include\node\openssl\asyncerr.h
gyp verb extracted file from tarball include\node\openssl\bio.h
gyp verb extracted file from tarball include\node\openssl\bioerr.h
gyp verb extracted file from tarball include\node\openssl\blowfish.h
gyp verb extracted file from tarball include\node\openssl\bn.h
gyp verb extracted file from tarball include\node\openssl\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\bn_conf_asm.h
gyp verb extracted file from tarball include\node\openssl\bn_conf_no-asm.h
gyp verb extracted file from tarball include\node\openssl\bnerr.h
gyp verb extracted file from tarball include\node\openssl\buffer.h
gyp verb extracted file from tarball include\node\openssl\buffererr.h
gyp verb extracted file from tarball include\node\openssl\camellia.h
gyp verb extracted file from tarball include\node\openssl\cast.h
gyp verb extracted file from tarball include\node\openssl\cmac.h
gyp verb extracted file from tarball include\node\openssl\cms.h
gyp verb extracted file from tarball include\node\openssl\cmserr.h
gyp verb extracted file from tarball include\node\openssl\comp.h
gyp verb extracted file from tarball include\node\openssl\comperr.h
gyp verb extracted file from tarball include\node\openssl\conf.h
gyp verb extracted file from tarball include\node\openssl\conf_api.h
gyp verb extracted file from tarball include\node\openssl\conferr.h
gyp verb extracted file from tarball include\node\openssl\crypto.h
gyp verb extracted file from tarball include\node\openssl\cryptoerr.h
gyp verb extracted file from tarball include\node\openssl\ct.h
gyp verb extracted file from tarball include\node\openssl\cterr.h
gyp verb extracted file from tarball include\node\openssl\des.h
gyp verb extracted file from tarball include\node\openssl\dh.h
gyp verb extracted file from tarball include\node\openssl\dherr.h
gyp verb extracted file from tarball include\node\openssl\dsa.h
gyp verb extracted file from tarball include\node\openssl\dsaerr.h
gyp verb extracted file from tarball include\node\openssl\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\dso_conf_asm.h
gyp verb extracted file from tarball include\node\openssl\dso_conf_no-asm.h
gyp verb extracted file from tarball include\node\openssl\dtls1.h
gyp verb extracted file from tarball include\node\openssl\e_os2.h
gyp verb extracted file from tarball include\node\openssl\ebcdic.h
gyp verb extracted file from tarball include\node\openssl\ec.h
gyp verb extracted file from tarball include\node\openssl\ecdh.h
gyp verb extracted file from tarball include\node\openssl\ecdsa.h
gyp verb extracted file from tarball include\node\openssl\ecerr.h
gyp verb extracted file from tarball include\node\openssl\engine.h
gyp verb extracted file from tarball include\node\openssl\engineerr.h
gyp verb extracted file from tarball include\node\openssl\err.h
gyp verb extracted file from tarball include\node\openssl\evp.h
gyp verb extracted file from tarball include\node\openssl\evperr.h
gyp verb extracted file from tarball include\node\openssl\hmac.h
gyp verb extracted file from tarball include\node\openssl\idea.h
gyp verb extracted file from tarball include\node\openssl\kdf.h
gyp verb extracted file from tarball include\node\openssl\kdferr.h
gyp verb extracted file from tarball include\node\openssl\lhash.h
gyp verb extracted file from tarball include\node\openssl\md2.h
gyp verb extracted file from tarball include\node\openssl\md4.h
gyp verb extracted file from tarball include\node\openssl\md5.h
gyp verb extracted file from tarball include\node\openssl\mdc2.h
gyp verb extracted file from tarball include\node\openssl\modes.h
gyp verb extracted file from tarball include\node\openssl\obj_mac.h
gyp verb extracted file from tarball include\node\openssl\objects.h
gyp verb extracted file from tarball include\node\openssl\objectserr.h
gyp verb extracted file from tarball include\node\openssl\ocsp.h
gyp verb extracted file from tarball include\node\openssl\ocsperr.h
gyp verb extracted file from tarball include\node\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\opensslconf_asm.h
gyp verb extracted file from tarball include\node\openssl\opensslconf_no-asm.h
gyp verb extracted file from tarball include\node\openssl\opensslv.h
gyp verb extracted file from tarball include\node\openssl\ossl_typ.h
gyp verb extracted file from tarball include\node\openssl\pem.h
gyp verb extracted file from tarball include\node\openssl\pem2.h
gyp verb extracted file from tarball include\node\openssl\pemerr.h
gyp verb extracted file from tarball include\node\openssl\pkcs12.h
gyp verb extracted file from tarball include\node\openssl\pkcs12err.h
gyp verb extracted file from tarball include\node\openssl\pkcs7.h
gyp verb extracted file from tarball include\node\openssl\pkcs7err.h
gyp verb extracted file from tarball include\node\openssl\rand.h
gyp verb extracted file from tarball include\node\openssl\rand_drbg.h
gyp verb extracted file from tarball include\node\openssl\randerr.h
gyp verb extracted file from tarball include\node\openssl\rc2.h
gyp verb extracted file from tarball include\node\openssl\rc4.h
gyp verb extracted file from tarball include\node\openssl\rc5.h
gyp verb extracted file from tarball include\node\openssl\ripemd.h
gyp verb extracted file from tarball include\node\openssl\rsa.h
gyp verb extracted file from tarball include\node\openssl\rsaerr.h
gyp verb extracted file from tarball include\node\openssl\safestack.h
gyp verb extracted file from tarball include\node\openssl\seed.h
gyp verb extracted file from tarball include\node\openssl\sha.h
gyp verb extracted file from tarball include\node\openssl\srp.h
gyp verb extracted file from tarball include\node\openssl\srtp.h
gyp verb extracted file from tarball include\node\openssl\ssl.h
gyp verb extracted file from tarball include\node\openssl\ssl2.h
gyp verb extracted file from tarball include\node\openssl\ssl3.h
gyp verb extracted file from tarball include\node\openssl\sslerr.h
gyp verb extracted file from tarball include\node\openssl\stack.h
gyp verb extracted file from tarball include\node\openssl\store.h
gyp verb extracted file from tarball include\node\openssl\storeerr.h
gyp verb extracted file from tarball include\node\openssl\symhacks.h
gyp verb extracted file from tarball include\node\openssl\tls1.h
gyp verb extracted file from tarball include\node\openssl\ts.h
gyp verb extracted file from tarball include\node\openssl\tserr.h
gyp verb extracted file from tarball include\node\openssl\txt_db.h
gyp verb extracted file from tarball include\node\openssl\ui.h
gyp verb extracted file from tarball include\node\openssl\uierr.h
gyp verb extracted file from tarball include\node\openssl\whrlpool.h
gyp verb extracted file from tarball include\node\openssl\x509.h
gyp verb extracted file from tarball include\node\openssl\x509_vfy.h
gyp verb extracted file from tarball include\node\openssl\x509err.h
gyp verb extracted file from tarball include\node\openssl\x509v3.h
gyp verb extracted file from tarball include\node\openssl\x509v3err.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN64A\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\VC-WIN32\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris64-x86_64-gcc\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\solaris-x86-gcc\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux64-s390x\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux32-s390x\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x86_64\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm\crypto\buildinf.h
gyp verb content checksum node-v11.10.0-headers.tar.gz 17ec75ef5d54f8b26faa31d9d70e98a32f333e0b5398608099e4104fb3492c73
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-x32\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64le\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc64\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-ppc\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-elf\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-armv4\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\linux-aarch64\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin64-x86_64-cc\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\darwin-i386-cc\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\BSD-x86_64\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix64-gcc\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\no-asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\no-asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\no-asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\no-asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\no-asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm_avx2\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm_avx2\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm_avx2\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm_avx2\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm_avx2\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm\include\progs.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm\include\openssl\opensslconf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm\crypto\buildinf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm\crypto\include\internal\bn_conf.h
gyp verb extracted file from tarball include\node\openssl\archs\aix-gcc\asm\crypto\include\internal\dso_conf.h
gyp verb extracted file from tarball include\node\libplatform\libplatform-export.h
gyp verb extracted file from tarball include\node\libplatform\libplatform.h
gyp verb extracted file from tarball include\node\libplatform\v8-tracing.h
gyp verb tarball done parsing tarball
gyp verb on Windows; need to download `node.lib`...
gyp verb 32-bit node.lib dir C:\Users\mattv\.node-gyp\11.10.0\ia32
gyp verb 64-bit node.lib dir C:\Users\mattv\.node-gyp\11.10.0\x64
gyp verb `node.lib` 32-bit url https://nodejs.org/download/release/v11.10.0/win-x86/node.lib
gyp verb `node.lib` 64-bit url https://nodejs.org/download/release/v11.10.0/win-x64/node.lib
gyp verb check download content checksum, need to download `SHASUMS256.txt`...
gyp verb checksum url https://nodejs.org/download/release/v11.10.0/SHASUMS256.txt
gyp http GET https://nodejs.org/download/release/v11.10.0/SHASUMS256.txt
gyp verb streaming 64-bit node.lib to: C:\Users\mattv\.node-gyp\11.10.0\x64\node.lib
gyp http GET https://nodejs.org/download/release/v11.10.0/win-x64/node.lib
gyp verb streaming 32-bit node.lib to: C:\Users\mattv\.node-gyp\11.10.0\ia32\node.lib
gyp http GET https://nodejs.org/download/release/v11.10.0/win-x86/node.lib
gyp http 200 https://nodejs.org/download/release/v11.10.0/SHASUMS256.txt
gyp verb checksum data {"node-v11.10.0-aix-ppc64.tar.gz":"c9526a855f9322330caa8f800de8cd734895d8575292286f5576f62c614aa5b4","node-v11.10.0-darwin-x64.tar.gz":"1956528c6f3934a97508e36a4855c154f40f1923ccd61e296d5a85679103e3a1","node-v11.10.0-darwin-x64.tar.xz":"6855b539537ae448e03b8490c9c470160b668ccd82d9937b7bdfb3fb6fa5880d","node-v11.10.0-headers.tar.gz":"17ec75ef5d54f8b26faa31d9d70e98a32f333e0b5398608099e4104fb3492c73","node-v11.10.0-headers.tar.xz":"c9136ffd91eaf82eb363a734dae0a26bcaa9cadb94af9dfd6e37560e1582b047","node-v11.10.0-linux-arm64.tar.gz":"9407ff7019f1d6048134443638bb9473543ebdd8de268057eb929aaa044e6180","node-v11.10.0-linux-arm64.tar.xz":"60ed6caa90d8188a55f0dbc63f4aef263fb4863e036d32989b820a2e40582c66","node-v11.10.0-linux-armv6l.tar.gz":"148ba015bf25bf3c52bde3a6a6baa9f11fcfd6918085b7ae24b740cab38667b9","node-v11.10.0-linux-armv6l.tar.xz":"f832c6026286e02b8f9569bb8dcea3832f71ec634bcbde2e97e740180977ebdf","node-v11.10.0-linux-armv7l.tar.gz":"7e9c8a52d34e972c588609ac9de4698991565be913a5537f2b667591b955886d","node-v11.10.0-linux-armv7l.tar.xz":"dac3961b7d25b54a8d9a4e84f7d8ac2c68a2fee11b744dfa1fa115701c1213d2","node-v11.10.0-linux-ppc64le.tar.gz":"666d137bbe386f4c4efdc09cc35ef976a874cf7122f1f429163f738cd1957906","node-v11.10.0-linux-ppc64le.tar.xz":"567a8670d44a93ea2bc09115ae41724eb4a1c6a7ced2a4944c358bfb44c5d5a5","node-v11.10.0-linux-s390x.tar.gz":"74e4feef88571d608d96b63cec82f0b26fd139b99760e592ab29dca1c7c3b0dd","node-v11.10.0-linux-s390x.tar.xz":"f5015866e659d00746bedddd29707a56c8b14f3869ef1f4a1b8e98d085547f80","node-v11.10.0-linux-x64.tar.gz":"4117de50800ecc6d5f7a9c3989d5497fa9dd37df87a904ac4d49948ab10d39ba","node-v11.10.0-linux-x64.tar.xz":"fe4c617aaf88b5228bce0341d1c77bbae2622d69eaa17a15b7d4bcc60c4777c5","node-v11.10.0.pkg":"d24d423fd69921e12a2ea8be1bf8ee0f0287132bbdd487a58ce2ba55d901eeb0","node-v11.10.0-sunos-x64.tar.gz":"8bb2b4126d7334f5f6213598b40f3bfa305ffac9ace96f6a0538f3b290a33c78","node-v11.10.0-sunos-x64.tar.xz":"2f9a61f76c316dc2e0710df8c457cc7dc22500886a5fa6d71423bc03fbc798a9","node-v11.10.0.tar.gz":"45835c210955cd05cab259e664cc19a6f2748dbda6bc9e13edc9a2e8cc498770","node-v11.10.0.tar.xz":"9fc2ac66ae4608c4c4bd6accc3f0af58ec52dd45fe35c9c0b4059e377119d1cf","node-v11.10.0-win-x64.7z":"f09b12011d4928d73e402190705a39cee0114c466c2d84341030603aef20691d","node-v11.10.0-win-x64.zip":"c39e711aebe678455fa74edf6d8f6184d6d93e20f160197799040a0c17005dba","node-v11.10.0-win-x86.7z":"6c135cdbccda813b24417bf7316d3cbbc7979d8b6b4ecaff3d62a8714d38ce11","node-v11.10.0-win-x86.zip":"f59a0f5ca466b0b41fab14cf5fc5a3ff0f828dce8b03f5fb72504e7c2e2bc0d7","node-v11.10.0-x64.msi":"ddad334110a914de93c600a780e53e35ca68209d7baf5bd1d3c8805f75a97b77","node-v11.10.0-x86.msi":"cd4614ded8e30b371ec1ea37cdf40fcafb6aad659d7c468b99740f02c3b0a10c","win-x64/node.exe":"b951d239c7bab8888af7329c8aad2cc1fb99cb1c007c17a4ac2488fe8c216c06","win-x64/node.lib":"36a01d94f5c136fd0198f92ad345acff844aee0316c96ba20a98ecfb456fa895","win-x64/node_pdb.7z":"7b318606b89c9a2d5fe3762fd9dde54f8172f6c00c8c82745396f40194037304","win-x64/node_pdb.zip":"288c867faa73fb89d7f148c6f89d81afde0c5937b9b8f29ae443483cf1fae1f5","win-x86/node.exe":"0b5f859f43bbb37554c2d9c9271b373239173779aca13546acfb2f9147d197d7","win-x86/node.lib":"a75ad641b7187792b5e3dcb3997fc80a6b9a309d3c5f9cd87e1e9eb48fe49374","win-x86/node_pdb.7z":"668075e77c1cadaa921da1b19f56b6acb153d6de31aed0afbb359837a84300ef","win-x86/node_pdb.zip":"2770a18f94df5f3be2d3ef21182ac120e138ea0c4e9b67d445b6bcbbecbafc0a"}
gyp http 200 https://nodejs.org/download/release/v11.10.0/win-x64/node.lib
gyp http 200 https://nodejs.org/download/release/v11.10.0/win-x86/node.lib
gyp verb content checksum win-x64/node.lib 36a01d94f5c136fd0198f92ad345acff844aee0316c96ba20a98ecfb456fa895
gyp verb content checksum win-x86/node.lib a75ad641b7187792b5e3dcb3997fc80a6b9a309d3c5f9cd87e1e9eb48fe49374
gyp verb download contents checksum {"node-v11.10.0-headers.tar.gz":"17ec75ef5d54f8b26faa31d9d70e98a32f333e0b5398608099e4104fb3492c73","win-x64/node.lib":"36a01d94f5c136fd0198f92ad345acff844aee0316c96ba20a98ecfb456fa895","win-x86/node.lib":"a75ad641b7187792b5e3dcb3997fc80a6b9a309d3c5f9cd87e1e9eb48fe49374"}
gyp verb validating download checksum for node-v11.10.0-headers.tar.gz (17ec75ef5d54f8b26faa31d9d70e98a32f333e0b5398608099e4104fb3492c73 == 17ec75ef5d54f8b26faa31d9d70e98a32f333e0b5398608099e4104fb3492c73)
gyp verb validating download checksum for win-x64/node.lib (36a01d94f5c136fd0198f92ad345acff844aee0316c96ba20a98ecfb456fa895 == 36a01d94f5c136fd0198f92ad345acff844aee0316c96ba20a98ecfb456fa895)
gyp verb validating download checksum for win-x86/node.lib (a75ad641b7187792b5e3dcb3997fc80a6b9a309d3c5f9cd87e1e9eb48fe49374 == a75ad641b7187792b5e3dcb3997fc80a6b9a309d3c5f9cd87e1e9eb48fe49374)
gyp verb get node dir target node version installed: 11.10.0
gyp verb build dir attempting to create "build" dir: D:\development\buildmotion\github-search\workspace\node_modules\node-sass\build
gyp verb build dir "build" dir needed to be created? D:\development\buildmotion\github-search\workspace\node_modules\node-sass\build
gyp verb find vs2017 Found installation at: C:\Program Files (x86)\Microsoft Visual Studio\2017\Professional
gyp verb find vs2017   - Found Microsoft.VisualStudio.VC.MSBuild.Base
gyp verb find vs2017   - Missing VC++ 2017 v141 toolset (x86,x64) (Microsoft.VisualStudio.Component.VC.Tools.x86.x64)
gyp verb find vs2017   - Missing a Windows SDK (Microsoft.VisualStudio.Component.Windows10SDK.* or Microsoft.VisualStudio.Component.Windows81SDK)
gyp verb find vs2017   - Some required components are missing, not using this installation
gyp verb Not using VS2017: No usable installation of VS2017 found
gyp verb build/config.gypi creating config file
gyp verb build/config.gypi writing out config file: D:\development\buildmotion\github-search\workspace\node_modules\node-sass\build\config.gypi
gyp verb config.gypi checking for gypi file: D:\development\buildmotion\github-search\workspace\node_modules\node-sass\config.gypi
gyp verb common.gypi checking for gypi file: D:\development\buildmotion\github-search\workspace\node_modules\node-sass\common.gypi
gyp verb gyp gyp format was not specified; forcing "msvs"
gyp info spawn C:\Python27\python.EXE
gyp info spawn args [ 'D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-gyp\\gyp\\gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'msvs',
gyp info spawn args   '-G',
gyp info spawn args   'msvs_version=auto',
gyp info spawn args   '-I',
gyp info spawn args   'D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-sass\\build\\config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   'D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-gyp\\addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   'C:\\Users\\mattv\\.node-gyp\\11.10.0\\include\\node\\common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=C:\\Users\\mattv\\.node-gyp\\11.10.0',
gyp info spawn args   '-Dnode_gyp_dir=D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-gyp',
gyp info spawn args   '-Dnode_lib_file=C:\\Users\\mattv\\.node-gyp\\11.10.0\\<(target_arch)\\node.lib',
gyp info spawn args   '-Dmodule_root_dir=D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-sass',
gyp info spawn args   '-Dnode_engine=v8',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-sass\\build',
gyp info spawn args   '-Goutput_dir=.' ]
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
gyp verb command build []
gyp verb build type Release
gyp verb architecture x64
gyp verb node dev dir C:\Users\mattv\.node-gyp\11.10.0
gyp verb found first Solution file build/binding.sln
gyp verb could not find "msbuild.exe" in PATH - finding location in registry
gyp info spawn C:\Program Files (x86)\MSBuild\14.0\bin\msbuild.exe
gyp info spawn args [ 'build/binding.sln',
gyp info spawn args   '/nologo',
gyp info spawn args   '/p:Configuration=Release;Platform=x64' ]
Building the projects in this solution one at a time. To enable parallel build, please add the "/m" switch.
Build started 3/13/2019 6:32:06 PM.
Project "D:\development\buildmotion\github-search\workspace\node_modules\node-sass\build\binding.sln" on node 1 (default targets).
ValidateSolutionConfiguration:
  Building solution configuration "Release|x64".
MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe". To fix this, 1) install the .NET Framework 2.0 SDK, 2) install Mic
rosoft Visual Studio 2005 or 3) add the location of the component to the system path if it is installed elsewhere.  [D:\development\buildmotion\gi
thub-search\workspace\node_modules\node-sass\build\binding.sln]
Done Building Project "D:\development\buildmotion\github-search\workspace\node_modules\node-sass\build\binding.sln" (default targets) -- FAILED.


Build FAILED.

"D:\development\buildmotion\github-search\workspace\node_modules\node-sass\build\binding.sln" (default target) (1) ->
(_src_\libsass target) -> 
  MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe". To fix this, 1) install the .NET Framework 2.0 SDK, 2) install M
icrosoft Visual Studio 2005 or 3) add the location of the component to the system path if it is installed elsewhere.  [D:\development\buildmotion\
github-search\workspace\node_modules\node-sass\build\binding.sln]

    0 Warning(s)
    1 Error(s)

Time Elapsed 00:00:01.14
gyp ERR! build error
gyp ERR! stack Error: `C:\Program Files (x86)\MSBuild\14.0\bin\msbuild.exe` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onExit (D:\development\buildmotion\github-search\workspace\node_modules\node-gyp\lib\build.js:262:23)
gyp ERR! stack     at ChildProcess.emit (events.js:197:13)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:254:12)
gyp ERR! System Windows_NT 10.0.17134
gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "D:\\development\\buildmotion\\github-search\\workspace\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
gyp ERR! cwd D:\development\buildmotion\github-search\workspace\node_modules\node-sass
gyp ERR! node -v v11.10.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
Build failed with error code: 1
npm WARN @ngrx/router-store@6.1.0 requires a peer of @angular/common@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngrx/router-store@6.1.0 requires a peer of @angular/core@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngrx/router-store@6.1.0 requires a peer of @angular/router@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngrx/effects@6.1.0 requires a peer of @angular/core@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngrx/store@6.1.0 requires a peer of @angular/core@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: node-sass@4.9.3 (node_modules\node-sass):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: node-sass@4.9.3 postinstall: `node scripts/build.js`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

added 1085 packages from 1177 contributors in 88.19s
    Directory is already under version control. Skipping initialization of git.
```