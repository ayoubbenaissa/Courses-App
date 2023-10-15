# Python scripts to inject data

this folder contains two scripts to inject data into the Mongo DB:
    - static object: run `python3 insert_data.python` so that the static defined object will be inserted into DB
    - data from CSV: run `python3 insert_from_csv.python` so that data will be populated from **data.csv** and will be inserted into DB

## running code
- Pre-requirements :building_construction: :
    - make sure you have [**python3**](https://www.python.org/downloads/) installed in your machine (ideally Long Time Support version)
    - make sure you also have [pip](https://python.land/virtual-environments/installing-packages-with-pip) working as well
- create a new `.env` file to manage [ENV variables](https://www.freecodecamp.org/news/python-env-vars-how-to-get-an-environment-variable-in-python/) and you can use `.env copy` as reference
- Install dependencies:
    - install `pymongo`
    - install `dotenv`

