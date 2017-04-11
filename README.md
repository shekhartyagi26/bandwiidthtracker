# Bandwidth tracker using vnstat

### Requirements 
```bash
vnstat 1.17
node 5.0.0 & above
npm
```

### Installation Details ( Ubuntu ): -

#### Installation vnstat 1.17 ( skip if already installed )
```bash
$ wget http://humdi.net/vnstat/vnstat-1.17.tar.gz
$ tar xf vnstat-1.17.tar.gz
$ cd vnstat-1.17/
$ ./configure
$ sudo make
$ sudo make install

Check vnstat version
$ vnstat --version
You will get below response if successfully installed
vnStat 1.17 by Teemu Toivola <tst at iki dot fi>
```

#### Installation nodejs & npm ( skip if already installed )
```bash
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install node
$ sudo apt-get install nodejs-legacy
$ sudo apt-get install npm

Update Node version 
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n 5.0.0

Check node version
$ node --version
You will get version like below if successfully installed
v5.0.0

Check npm version
$ npm --version
You will get version like below if successfully installed
v3.3.6
```

#### Clone the repository to your system
```bash
$ cd /usr/local/bin/
$ sudo git clone https://github.com/shekhartyagi26/bandwiidthtracker
$ cd bandwiidthtracker/
```

#### Install dependencies
```bash
$ sudo npm install
```

#### Test Run
```bash
$ npm start

Test Cases ( Will get below response ) :
- Pass ( Continue on next steps )
Result : Success
Mac Address is : < some value > ( Keep this for last step )


- Fail ( Contact Author & skip rest steps )
Result : Fail
```

#### Set Cron
```bash
$ crontab -e
Paste Below line
* */6 * * * bash /usr/local/bin/BandWidthtracker/cron.sh >> /usr/local/bin/BandWidthtracker/out.out
Press F2
Press y
Press Enter
```

#### Drop a below message to HR with you slack email and Mac Address
```bash
Email Id :  test@test.com
Mac Address : < Mac address which you get while Test Run>
```