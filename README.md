## Installation

1.Creation d'un fichier (ici NATS/)

2.Ouvrir dans vscode

## 3a.Création Gateway + déplacement dans le fichier

```
nest new gateway

cd gateway
```

## 3b.Création notre MicroService + déplacement dans le fichier

```
nest new [nom_du_micro_service]

cd [nom_du_micro_service]

```

## 4.Dans fichier nom_du_micro_service/ remplacerle contenu de la fonction bootstrap du fichier main.ts/ :

```
createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
        // Permet de définir une queue spécifique pour le microservice pour éviter les conflits et enchainer les messages
        // queue: 'ms-ex',
      },
    },
  );

```

## 4b.Installation:

## NATS dans le gateway/ + nom_du_micro_service/

```
pnpm i --save nats

ou

pnpm i -g nats

```

## 4c.Installation:Transport enum from the @nestjs/microservices package (voir élément Main.ts) + gateway.

```
pnpm i @nestjs/microservices

```

## 5.Sur Docker récupérer une image NATS (dans un terminal)+lancer le serveur nats

# récup img

```
docker pull nats

```

# Lancement serveur (https://hub.docker.com/_/nats)

# port_local=port_image => 4222 si occupé changer le port_image ?(4223) ou kill server

```
docker run -p [port_local]:[port_image] nats -p [port_image]

ou

docker run -p [port_local]:[port_image] nats:latest
```

# 6.Lancement App

```
pnpm run start:dev
```

# 7.Installation dans les modules
