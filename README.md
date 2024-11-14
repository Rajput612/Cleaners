# Local Development Setup

1. Install Node.js (LTS version) from https://nodejs.org/

2. Install NativeScript CLI globally:
```bash
npm install -g nativescript
```

3. For iOS Development (macOS only):
   - Install Xcode from the Mac App Store
   - Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```
   - Install iOS requirements via NativeScript CLI:
   ```bash
   ns environment
   ```

4. Running the Project:

```bash
# Install dependencies
npm install

# Run on iOS
ns run ios

# Preview on device (faster development)
ns preview

# Build for iOS
ns build ios
```

## Development in VS Code

1. Install VS Code Extensions:
   - NativeScript Extension Pack
   - TypeScript and JavaScript Language Features

2. Open the project in VS Code:
```bash
code .
```

3. To debug:
   - Set breakpoints in VS Code
   - Press F5 or use Run > Start Debugging
   - Select "NativeScript iOS" or "NativeScript Android" as the debug configuration

## Testing on iPhone

1. Connect your iPhone to your Mac
2. Open Xcode and trust your development certificate
3. Run `ns run ios` to deploy to your connected iPhone
4. Alternatively, use `ns preview` and scan the QR code with your iPhone camera