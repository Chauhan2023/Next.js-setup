import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>{/* Login form */}</CardContent>
    </Card>
  )
}
