# sine
A basic sine wave generator for the brainsatplay library


> **Note:** This is a template plugin for the brainsatplay repository.

## Plugin Structure
### Plugin Files
#### Graph Trees
The base export of your plugin should be a graph tree for the `brainsatplay` library.

```javascript
export default {
    now: {
        operator: () => Date.now()
        loop: 1000, // Loop once a second
        children: ['myplugin']
    }, 
    myplugin: {
        operator: (i) => console.log('This is my plugin', i)
    }
}
```

#### ES Module Syntax
All files for a plugin *must* be formatted as ES Modules. While you can organize these in any way, we use the `nodes` folder to organize the dependencies of this example plugin.

##### Exporting
```javascript 
// ESM Export
export default {
    tag: 'myplugin',
    operator: () => console.log('This is my plugin')
}
```

##### Importing
```javascript 
import myplugin from './nodes/myplugin/index.js' // ESM Import
import now from './nodes/myplugin/index.js' // ESM Import

now = Object.assign(now, {children: ['myplugin']}) // Add myplugin as a child of now

export default { 
    now,
    myplugin
}

```

### /.brainsatplay Folders
These folders contain essential metadata about your plugin. This includes:
1. Name
2. Description
3. Author
4. Default UI
5. more coming soon...

