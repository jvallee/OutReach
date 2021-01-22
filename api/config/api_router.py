from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from api.outreach.views import OutreachViewSet

if settings.DEBUG:
    router = DefaultRouter(trailing_slash=False)
else:
    router = SimpleRouter(trailing_slash=False)

router.register("outreach", OutreachViewSet)


app_name = "api"
urlpatterns = router.urls
