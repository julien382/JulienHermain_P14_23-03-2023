# EasyModal 

EasyModal est un composant REACT. Ce composant est uniquement utilisable sur une stack reactJS.

## Install

```
$ npm install easyModal
```

## utilisation

Pour ouvrir ou fermer la modal, il faut lui passer un state de type `boolean`et son setteur dans les props `isOpen` et `setIsOpen`

### Defaut

```
const [isOpen, setIsOpen] = useState(false)

...

<Modal setIsOpen={setIsOpen} isOpen={isOpen}>
    <p>Texte personalisé</p>
<Modal/>
```

### Close texte

```
<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
    <p onClick={()=>setIsOpen(false)}>Fermer la modal</p>
<Modal/>
```

### Remove closing cross

```
<Modal isOpen={isOpen} setIsOpen={setIsOpen} closingCross={false}>
    <p>Texte personalisé</p>
<Modal/>
```

### Edit closing button

```
<Modal isOpen={isOpen} setIsOpen={setIsOpen} editClose="!">
    <p>Texte personalisé</p>
<Modal/>
```

### fadeDuration and fadeDelay

```
<Modal setIsOpen={setIsOpen} isOpen={isOpen} fadeDuration={500} fadeDelay={10}>
    <p>Texte personalisé</p>
<Modal/>
```