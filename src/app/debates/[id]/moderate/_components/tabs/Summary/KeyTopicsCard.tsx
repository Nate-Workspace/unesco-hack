"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function KeyTopicsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Key Topics Discussed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Education Access</Badge>
          <Badge variant="secondary">Policy Implementation</Badge>
          <Badge variant="secondary">Youth Rights</Badge>
          <Badge variant="secondary">Cultural Barriers</Badge>
          <Badge variant="secondary">Government Role</Badge>
          <Badge variant="secondary">International Standards</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
