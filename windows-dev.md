# Ghid de creare mediu de lucru pe Windows

Poate ecosistemul Windows nu se numara printe mediile cele mai prietenoase dezvoltatorilor aplicatiei SocEnt, insa sigur nu vorbim despre o bariera in fata noastra; windows 10 vine cu [Windows Subsystem for Linux (WSL)](!https://msdn.microsoft.com/en-us/commandline/wsl/install_guide), un instrument de care ne vom folosi in setarea santierului de lucru SocEnt. Avem cativa pasi   


1) Instalare Windows Subsystem for Linux. Vezi instructiunile pe pagina oficiala la https://msdn.microsoft.com/en-us/commandline/wsl/install_guide


2) Setup Ruby on Rails. Un bun tutorial gasesti aici: https://gorails.com/setup/windows/10#ruby


3) Instaleaza cea mai recenta versiune PostgreSQL pentru Windows. http://www.enterprisedb.com/products-services-training/pgdownload#window


4) Ne intoarcem in Bash on Ubuntu on Windows si instalam un pachet pentru comunicarea cu postgreSQL:
```sh
sudo apt-get install postgresql-common postgresql libpq-dev
```


5) Urmeaza instalarea unui client de Git. Ne putem folosi fie de [GitHub Desktop](!https://desktop.github.com/) avand un GUI foarte intuitiv, fie de o client accesibil din linia de comanda [git bash](!https://git-scm.com/). O alta solutie la indemana poate fi [configurarea clientul de Git](!https://gorails.com/setup/windows/10#git) prezent in Bash on Ubuntu on Windows    


6) Crearea unui fork al repo-ului central; frontend accesibil [aici](!https://github.com/gov-ithub/socent-frontend) si backend accesibil [aici](!https://github.com/gov-ithub/socent_backend) 


7) Clonam repo-ul in mediul local. Avem nevoie un remote "upstream" care va pointa catre repo-ul original si care ne va servi in vederea asigurari un sincronizari intre repo-ul original si fork-ului.


8) Setup-ul bazei de date pentru aplicatia de backend presupune o mica ajustare a codului. File watcher-ul nu este suportat in Bash On Ubuntu on Windows, motiv pentru care in configuratia de development (config/environments/development.rb) avem nevoie sa comentam urmatoarea linie de cod
```javascript
config.file_watcher = ActiveSupport::EventedFileUpdateChecker
```


9) Pornim serverul pe portul 3001 ``` rails server -p 3001  ```


10) Frontend-ul are un [ghid de instalare](!https://github.com/gov-ithub/socent-frontend#instalare) pe pagina de github. Pentru conectarea aplicatiei cu serverul de API tocmai pornit modificam constructorul clasei API si rescriem valoarea implicita a parametrului baseURI sa pointeze catre localhost; in fisierul "src/api/API.js" 
```javascript
baseURI: string = 'http://localhost:3001',
```

### Happy Coding!
