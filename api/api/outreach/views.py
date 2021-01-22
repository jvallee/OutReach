from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from django.utils.decorators import method_decorator
from drf_yasg.utils import swagger_auto_schema

from .models import Outreach
from .serializers import OutreachSerializer


# Decorations are for the auto generated clientjkjkjk:wq


@method_decorator(
    name="list", decorator=swagger_auto_schema(operation_description="list oureach", operation_id="listOutreach"),
)
@method_decorator(
    name="retrieve",
    decorator=swagger_auto_schema(operation_description="retrieve outreach", operation_id="getOutreach"),
)
@method_decorator(
    name="create",
    decorator=swagger_auto_schema(operation_description="create outreach", operation_id="createOutreach"),
)
@method_decorator(
    name="update", decorator=swagger_auto_schema(operation_description="update oureach", operation_id="updateOutreach"),
)
@method_decorator(
    name="partial_update",
    decorator=swagger_auto_schema(operation_description="partial update oureach", operation_id="partialUpdateOutreach"),
)
class OutreachViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing outreach.
    """

    queryset = Outreach.objects.all()
    serializer_class = OutreachSerializer
    filter_backends = [filters.OrderingFilter, filters.SearchFilter, DjangoFilterBackend]
    filterset_fields = ["state"]
    ordering = ("-created",)
    ordering_fields = [
        "created",
        "modified",
        "state",
    ]
