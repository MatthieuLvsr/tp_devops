# tp_devops

## Sonarqube

### First deploy
In the first deployment you may have an error with **sonarScanner**. The reason is simple : You still don't have token.

To solve this issue you just have to go on your [local sonarqube](http://sonarqube:9000/) and follow a few steps :
1. Login
2. Go on "**Account**" -> "**My Account**" on the top right corner
3. Go on "**Security**"
4. Generate a new token and copy it in the *docker-compose.yaml*
      **- SONAR_TOKEN={YOUR_NEW_TOKEN}**

## Kubernetes

To setup Kubernetes you have to follow the next lines :

1. **Setup the basics :**
```
kubectl create -f clusterRole.yaml
kubectl create -f config-map.yaml
```
1. **Setup the namespaces :**
```
kubectl create namespace monitoring
kubectl create namespace front
kubectl create namespace back
```
1. **Setup Monitoring**
```
kubectl create -f prometheus-deployment.yaml
kubectl create -f prometheus-service.yaml --namespace=monitoring
kubectl create -f grafana-config.yaml
kubectl create -f grafana-deployment.yaml
kubectl create -f grafana-service.yaml
```
1. **Setup MongoDB**
```
kubectl create -f mongo-config.yaml
kubectl create -f mongo-deployment.yaml
kubectl create -f mongo-service.yaml --namespace=back
```
1. **Setup API**
```
kubectl create -f api-deployment.yaml
kubectl create -f api-service.yaml --namespace=back
```
1. **Setup Front**
```
kubectl create -f front-config.yaml
kubectl create -f front-deployment.yaml
kubectl create -f front-service.yaml --namespace=front
```