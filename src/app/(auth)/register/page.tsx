import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>{/* Register form */}</CardContent>
    </Card>
  )
}
