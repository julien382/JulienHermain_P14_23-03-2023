# MA SUPER MODAL

Ma-Super-Modal est un composant REACT. Ce composant est uniquement utilisable sur une stack reactJS.

## Install

```
$ npm install lenomdemonpackage
```

## utilisation

Pour ouvrir ou fermer la modal, il faut lui passer un state de type `boolean`et son setteur dans les props `isOpen` et `setIsOpen`

### Defaut

```
const [isOpen, setIsOpen] = useState(false)

...

<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
    <p>Texte personalisé<p>
<Modal/>
```

### Close texte

```
<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
    <p onClick={()=>setIsOpen(false)}>Fermer la modal<p>
<Modal/>
```


### Remove closing cross

```
<Modal isOpen={isOpen} setIsOpen={setIsOpen} closingCross={false}>
    <p onClick={()=>setIsOpen(false)}>Fermer la modal<p>
<Modal/>
```
=============================================

### CSS adjusting content

### fade transition
props fadeDelay fadeDuration={3000}

### close button tunning
closeClass="new-class"
closeText={yo!}

### 