# Storage for properties
It is service for storage all properties. Service give access to properties with rest api.
# Api
* ```/get``` api for get property
### Payload
```
{
  "key": ...(string value) - it is name of property
}
```
### Result
```
{
  "status": true,
  "value": ... - value in property
}
```
* ```/set``` api for srore property
### Payload
```
{
  "key": ...(string value) - it is name of property
  "value": - it is value of property
}
```
### Result
```
{
  "status": true,
}
```
# Instalation notes
1. Clone repositories
```
git clone https://github.com/kudryaA/Storage-for-propertie
```
2. Open folder
```
cd Storage-for-properties
```
3. Install dependencies
```
npm install
```
4. Run server
```
npm start
```
