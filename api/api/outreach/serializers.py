from rest_framework import serializers

from .models import Outreach


class OutreachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Outreach
        fields = [
            "id",
            "created",
            "modified",
            "editor_state",
            "state",
        ]

    # override
    def create(self, validated_data):
        return Outreach.objects.create(
            state=validated_data.get("state"), editor_state=validated_data.get("editor_state"),
        )

    # override
    def update(self, instance, validated_data):
        instance.state = validated_data.get("state", instance.state)
        instance.editor_state = validated_data.get("editor_state", instance.editor_state)
        instance.save()
        return instance
