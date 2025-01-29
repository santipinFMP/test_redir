# HOW TO RUN

**Might be differerent on windows**

1. Run `docker-compose build`
2. Run `docker-compose up`
   1. Most probably windows won't allow you to use port 80
   2. If so, change 
      ```
        ports:
      - "80:80"
      ```
      to
      ```
      ports:
      - "8080:80"
      ```
    3. After this some links might be broken as well
    4. Enjoy Windows!