# Presento

Presento is a powerful web application designed to transform literary resources like articles, blogs and research papers into captivating presentations effortlessly. With a user-friendly interface and seamless integration of cutting-edge technologies, Presento takes the hassle out of crafting formal-looking presentations.

## Key Features

* **AI Integration:** Leveraging the OPEN AI API, Presento intelligently synthesizes content, highlighting only the most relevant and impactful points.
* **Efficiency:** Presento streamlines the presentation creation process, condensing information from provided links into impactful presentation points.

## Dependencies

Before using Presento, ensure you have the following prerequisites set up:

* **React Setup:** Presento's frontend is built using React. If you don't have React installed, please follow the steps below:

     * **Install Node.js:** Presento requires Node.js to work with React. You can download and install Node.js from the official website: [https://nodejs.org/](https://nodejs.org/).

     * **Node Version Manager (NVM):** For better compatibility, we recommend using NVM to manage your Node.js versions. Install NVM by following the instructions here: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

* **pip:** pip is the package installer for Python. It is usually installed by default when you install Python. However, make sure you have pip installed and it is up to date. You can check the version of pip by running the following command:
```
pip --version
```

## Installation
To install and use Presento, follow the steps given below:

* Fork the Presento repository by clicking the "Fork" button at the top right corner of the repository page. This will create a copy of the repository under your GitHub account.

* Clone the forked repository to your local machine:
```
git clone https://github.com/{YOUR-USERNAME}/Presento-App
```
* Navigate to the project directory:
```
cd Presento-App
```
* To run the Flask API install the necessary Python packages by running the following command in the following directories:
   * ```
     #navigate to the url to json api directory
     cd URLtoJSON_API

     #install the requirements
     pip install -r requirements.txt

     # run the flask api
     python3 app.py
     ```
     The API will be running at [http://127.0.0.1:4000](http://127.0.0.1:4000)
    * ```
      #navigate to the url to json api directory
      cd presento-flask

      #install the requirements
      pip install -r requirements.txt
      ```
      I have used pptx2pdf which requires [libreoffice](https://www.libreoffice.org/) and [imagemagick](https://www.imagemagick.org/script/index.php) and might require [ghostscript](https://www.ghostscript.com/).

      ubuntu/debian
      ```
      sudo apt install libreoffice
      sudo apt install imagemagick
      sudo apt install ghostscript
      ```

      More details can be found at: [https://github.com/jbastias/pptx2pdf](https://github.com/jbastias/pptx2pdf)

      After the above steps in presento-flask directory, run the following command to run the Flask API.
        ``` 
        python3 app.py
        ```
        The API will be running at [http://127.0.0.1:5000](http://127.0.0.1:5000)

* Now when the Flask APIs are running, run the React App. To run the react app, follow the below commands:
```
# navigate to the presento directory
cd presento

# install packages
npm i

# run the app
npm run dev
```
The React App will be running on [http://localhost:5173/](http://localhost:5173/)


## How to use Presento?
To use the application, make sure the Flask APIs are  running and further follow the steps:

* Enter the link to the literary resource (for now presento only supports free medium articles upto 15-19 min read).

* Hit the submit button.

## Contributions

Contributions to Presento are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

## Author 
* [Siddhi Agarwal](https://github.com/agaSiddhi)
