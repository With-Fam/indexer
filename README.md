# ManageFamAuthorityIndexer 🔍

A real-time event indexer for the ManageFamAuthority smart contract, tracking Subscription events with Party access management.

## 🚀 Quick Start

### Prerequisites

- Node.js v20 or later
- Bun package manager
- A `.env` file with required configuration (see Configuration section)

### Installation

```bash
bun install
```

### Running the Indexer

```bash
bun start    # Start in production mode
bun dev      # Start in development mode with auto-reload
```

## ⚙️ Configuration

Create a `.env` file in the root directory with the following variables:

```env
STACK_API_KEY=your_stack_api_key
STACK_SYSTEM_ID=your_system_id
```

## 🏗️ Project Structure

- `src/index.ts` - Main application entry point
- `src/services/` - Core services (WebSocket, event watching)
- `src/utils/` - Utility functions and configuration
- `src/types/` - TypeScript type definitions
- `src/abis/` - Smart contract ABIs

## 📚 Documentation

- [Product Requirements Document (PRD)](./requirements.md)

## 🛠️ Development

### Building the Project

```bash
bun run build
```

### Running Tests

```bash
bun test
```

## 🚀 Deployment

### Digital Ocean Droplet Setup

1. **Create and Access Your Droplet**

   ```bash
   ssh root@your_droplet_ip
   ```

2. **Install Required Software**

   ```bash
   # Install NVM
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc

   # Install Node.js 20
   nvm install 20
   nvm use 20

   # Install Bun
   curl -fsSL https://bun.sh/install | bash
   source ~/.bashrc

   # Install PM2
   npm install -g pm2
   ```

3. **GitHub Actions Setup**
   Add these secrets to your repository:
   - `DROPLET_IP`
   - `DROPLET_USER`
   - `DROPLET_PASSWORD`

## 🔄 Automatic Deployment

The project uses GitHub Actions for CI/CD:

- Pushes to `main` or `test` branches trigger automatic deployment
- PM2 manages the application with automatic restarts every 12 hours
- WebSocket connections are properly managed with cleanup on shutdown

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
