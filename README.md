# MedTempoAngular
### Comandos para a instalação

- Instale os módulos npm 

~~~comand
npm i
~~~


- Abra os códigos no seu editor preferido
  
~~~comand
code .
~~~
ou
~~~comand
codium .
~~~
ou qualquer outro editor


- Rode com Ionic
  
~~~comand
ionic serve --lab
~~~
ou com o script
  
~~~comand
npm run dev
~~~



### Comando para o build Android (production)

- Lembre-se de instalar as dependências do [https://openjdk.org/](Java)

- Build os componentes para a web com o ionic (para desenvolvimento remova a flag --prod)

~~~comand
npx ionic build --prod
~~~

- Adicione o arquivos do gradle


~~~comand
npx ionic capacitor add android
~~~

- Mude para a pasta correta 

~~~comand
cd ./android
~~~

- Instale o [sdkmanager](https://developer.android.com/tools/sdkmanager) e o sdk do android, e liste as versões para instalar a mais recente 

~~~comand
sdkmanager --list 
~~~

- Instale o sdk desejado e defina sua localizacao e exporte uma variável de ambiente indicando a localizacão

~~~comand
sdkmanager "platforms;android-33" --sdk_root=.

export ANDROID_HOME=.
~~~

- Baixe as dependências do gradle

~~~comand
./gradlew
~~~

- Crie o Build do Projeto

~~~comand
./gradlew buildRelease
~~~