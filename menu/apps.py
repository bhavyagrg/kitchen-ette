from django.apps import AppConfig


class MenuConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'menu'

# kitchenette/apps.py

from django.contrib.auth.models import User
import os

class KitchenetteConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'kitchenette'

    def ready(self):
        # To avoid running this during migrations
        if os.environ.get('RUN_MAIN', None) != 'true':
            return

        username = os.environ.get('DJANGO_ADMIN_USERNAME', 'bhavyagrg')
        password = os.environ.get('DJANGO_ADMIN_PASSWORD', '123')
        email = os.environ.get('DJANGO_ADMIN_EMAIL', 'bebhavyagarg@gmail.com')

        try:
            if not User.objects.filter(username=username).exists():
                print("Creating superuser...")
                User.objects.create_superuser(username=username, password=password, email=email)
            else:
                print("Superuser already exists.")
        except Exception as e:
            print(f"Error creating superuser: {e}")
