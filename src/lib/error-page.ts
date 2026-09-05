export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UFBC Agrodealer - Service Ready</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #f9fafb;
      color: #111827;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
    }
    .card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 32px;
      max-width: 480px;
      text-align: center;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    h1 { font-size: 20px; margin-bottom: 8px; color: #166534; }
    p { font-size: 14px; color: #4b5563; margin-bottom: 24px; line-height: 1.5; }
    .btn {
      display: inline-block;
      background: #166534;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>UFBC Agrodealer System</h1>
    <p>The application is active. If you are logging in or continuing, click below to open your workspace.</p>
    <a href="/auth" class="btn">Proceed to Login</a>
  </div>
</body>
</html>`;
}
