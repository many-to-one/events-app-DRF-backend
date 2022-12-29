from rest_framework import serializers
from users.models import NewUser


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    class Meta:
        model = NewUser
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance