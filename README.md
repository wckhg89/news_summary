# 뉴스 요약 및 형태소 분석 프로젝트

## 프로젝트 세팅

### Mecab 설치

* download 경로

> [https://bitbucket.org/eunjeon/mecab-ko/downloads](mecab-ko)
  [https://bitbucket.org/eunjeon/mecab-ko-dic/downloads](mecab-ko-dic)

* 현재 프로젝트 경로에서

``` vim

$ wget https://bitbucket.org/eunjeon/mecab-ko/downloads/mecab-0.996-ko-0.9.2.tar.gz
$ wget https://bitbucket.org/eunjeon/mecab-ko-dic/downloads/mecab-ko-dic-2.0.1-20150920.tar.gz
$ tar xvf mecab*.tar

```

* mecab-ko build

``` vim

$ cd mecab-[version]
$ ./configure
$ sudo make
$ sudo make install

```

* mecab-ko-dic build

``` vim

$ cd mecab-ko-dic-[version]
$ ./autogen.sh
$ ./configure
$ sudo make
$ sudo make install

```


* 마지막으로!

``` vim

$ npm install

```
