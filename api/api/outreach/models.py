import uuid

from django.core.serializers.json import DjangoJSONEncoder
from django.contrib.postgres.fields import JSONField
from django.db import models
from django_extensions.db import models as ext_models
from django.utils.translation import gettext_lazy as _


class OutreachStatus(models.TextChoices):
    DRAFT = "DRAFT", _("DRAFT")
    FINALIZED = "FINALIZED", _("FINALIZED")


class Outreach(ext_models.TimeStampedModel):
    class Meta:
        db_table = "outreach"

    # In a real app this would be tied to a user or job
    # Not starting with that to keep the onsite minimal

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    state = models.CharField(max_length=10, choices=OutreachStatus.choices, default=OutreachStatus.DRAFT)
    editor_state = JSONField(null=True)  # state used by the frontend editor
