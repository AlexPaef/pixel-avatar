# Pixel Avatar 
> A simple generator for pixel-style avatars

## Installation
```bash
npm install pixel-avatar
```

## Usage
```javascript
import generateAvatar from 'pixel-avatar';

const avatar = generateAvatar({ seed: 'user123' });
```

## Customization
You can customize the avatar generation by providing additional options:

```javascript
const options = {
  seed: 'user123',    // Seed for consistent avatar generation
  size: 128,          // Avatar size in pixels
  gridSize: 5,        // Grid size (higher means more detail)
  fillChance: 0.7,    // Probability of filling a cell (0-1)
  colors: ['#FF5733', '#33FF57'], // Custom colors
};

const avatar = generateAvatar(options);
```

## Options
| Option      | Type     | Default               | Description |
|------------|---------|-----------------------|-------------|
| `seed`     | String  | Required              | Unique identifier for the avatar |
| `size`     | Number  | `128`                 | Size of the avatar in pixels |
| `gridSize` | Number  | `5`                   | Grid size, affects details |
| `fillChance` | Number | `0.7`                 | Probability of a cell being filled (0-1) |
| `colors`   | Array   | `['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6', '#1abc9c']` | Custom color palette |

## License
MIT